"use client";

import { useEffect, useState } from "react";
import {
  Building2,
  User,
  BookOpen,
  MapPin,
  Globe,
  Phone,
  Users,
  Code2,
  Search,
  GraduationCap,
  Mail,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ExamDetailsType,
  ProjectDetailsType,
  ProjectMemberType,
  ProjectType,
  useDataStore,
} from "@/stores/data.store";
import { sendBotMessage } from "@/lib/utils";
import { telegramBotChatIds } from "@/lib/constants";
import { professorDetails } from "@/lib/constants/professor-details.constant";

const roomMapping = new Map([
  ["HARDIK ISHWARBHAI PATEL", "Bhagat Singh 301"],
  ["RONESHKUMAR GANGAVANI", "Bhagat Singh 301"],
  ["KAUSHAL GIRISHKUMAR GOR", "Bhagat Singh 302"],
  ["NAVTEJ PRAHLADBHAI BHATT", "Bhagat Singh 302"],
  ["Akilhusein Zulfikar Surti", "Bhagat Singh 303"],
  ["Dr.Arpan Raval", "Bhagat Singh 304"],
  ["Ms.Lisa Shah", "Bhagat Singh 305"],
  ["Kinjal Acharya", "Bhagat Singh 306"],
  ["PATEL JIGNESH TULSIDAS", "Bhagat Singh 307"],
  ["Mr.Anupam Mund", "Bhagat Singh 308"],
  ["Prashant Shah", "Bhagat Singh 309"],
  ["PRAVINKUMAR RAMESHBHAI PATEL", "Bhagat Singh 601"],
  ["Kaniya Agrawal", "Bhagat Singh 602"],
  ["Thakkar Meet Bharatbhai", "Bhagat Singh 603"],
  ["Vishal Makwana", "Bhagat Singh 604"],
  ["Jalpa Harshit Desai", "Bhagat Singh 605"],
  ["Smruti Sharma", "Bhagat Singh 606"],
  ["Divya Agrawal", "Bhagat Singh 607"],
  ["Dr.Raj Sinha", "New Building(Front of Subhash Chandra Bose Building) 210"],
  [
    "Dr.Ramchandran",
    "New Building(Front of Subhash Chandra Bose Building) 209",
  ],
  [
    "Dr. Ratnesh Namdeo",
    "New Building(Front of Subhash Chandra Bose Building) 211",
  ],
]);

export default function CompanyProjectPage() {
  const {
    user,
    setUser,
    projectDetails,
    setProjectDetails,
    examDetails,
    setExamDetails,
  } = useDataStore();
  const [enrollment, setEnrollment] = useState(user.enrollment || "");
  const [result, setResult] = useState<
    | (ProjectDetailsType & {
        currentMember: ProjectMemberType;
        currentProject: ProjectType;
        internalGuideDetails: (typeof professorDetails)[0] | null;
        examDetails: ExamDetailsType;
      })
    | null
  >(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log({ examDetails });
  }, [examDetails]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const res = await fetch(process.env.NEXT_PUBLIC_PROJECT_DATA_URL!);
        const json = await res.json();
        if (json && Array.isArray(json) && json.length > 0) {
          setProjectDetails(json);
        }
        const examRes = await fetch(
          process.env.NEXT_PUBLIC_PROJECT_EXAM_DETAIL_DATA_URL!,
        );
        const examJson = await examRes.json();
        if (examJson && Array.isArray(examJson) && examJson.length > 0) {
          setExamDetails(examJson);
        }
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [setProjectDetails, setExamDetails]);

  useEffect(() => {
    if (projectDetails && projectDetails.length > 0 && !result) {
      if (enrollment !== "") handleSearch();
    }
  }, [projectDetails]);

  const handleSearch = () => {
    setError("");
    let found: any = null;

    for (const details of projectDetails || []) {
      for (const project of details.projects || []) {
        for (const member of project.members || []) {
          if (member.enrollment === enrollment) {
            found = {
              ...details,
              currentProject: project,
              currentMember: member,
              examDetails:
                examDetails?.find(
                  (detail) => parseInt(detail["Group ID"]) === project.s_no,
                ) || null,
              internalGuideDetails:
                professorDetails.find(
                  (prof) =>
                    prof.name.toLowerCase() ===
                    details.internal_guide.toLowerCase(),
                ) || null,
            };
            break;
          }
        }
        if (found) break;
      }
      if (found) break;
    }

    if (!found) {
      setError("No record found for this enrollment number.");
      setResult(null);
    } else {
      setResult(found);
      setUser({
        name: found.currentMember.name,
        enrollment: found.currentMember.enrollment,
      });

      sendTelegramBotMessage(found);
    }
  };

  const sendTelegramBotMessage = (found: any) => {
    if (window.location.hostname !== "localhost") {
      const message = `👀 <b>${found.currentMember.name} searched their project!</b>

👤 <b>Name:</b> ${found.currentMember.name}
🪪 <b>Enrollment No.:</b> ${found.currentMember.enrollment}
🎓 <b>Course:</b> ${found.currentMember.program}
🕒 <b>Time:</b> ${new Date().toLocaleString()}`;

      sendBotMessage({
        chatId: telegramBotChatIds.githubPuVaultChannel,
        message,
      });
    }
  };

  const getValidUrl = (url: string) => {
    if (!url) return "#";
    return url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* --- Header & Search Section --- */}
        <section className="text-center space-y-4">
          <Card className="max-w-xl mx-auto shadow-xl border-t-4 border-t-primary mt-8">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    className="pl-10"
                    placeholder="Enter Enrollment Number (e.g. 2405...)"
                    value={enrollment}
                    onChange={(e) => setEnrollment(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>
                <Button onClick={handleSearch} className="px-8">
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {loading && (
          <div className="animate-pulse text-center py-10">
            Searching database...
          </div>
        )}
        {error && (
          <div className="text-destructive text-center bg-destructive/10 p-4 rounded-lg border border-destructive/20">
            {error}
          </div>
        )}

        {/* --- Results Section --- */}
        {!loading && result && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Left Column: Personal & Company Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <Card className="overflow-hidden shadow-primary shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-200">
                    <Badge
                      className="font-mono text-md font-medium"
                      variant={"secondary"}
                    >
                      Exam Venue and time
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 pb-6 text-md">
                  <h3 className="font-medium text-slate-800 dark:text-slate-300">
                    <span className="text-muted-foreground">Venue: </span>
                    {roomMapping.get(result.examDetails["External Examiner"])}
                  </h3>
                  <Separator className="my-1 bg-primary/40" />
                  <div className="text-slate-800 dark:text-slate-300 font-medium flex items-center gap-2 mt-1">
                    <span className="text-muted-foreground">
                      Reporting Time:{" "}
                    </span>{" "}
                    {result.examDetails["Reporting Time"]}
                  </div>
                  <Separator className="my-1 bg-primary/40" />
                  <div className="text-slate-800 dark:text-slate-300 font-medium flex items-center gap-2 mt-1">
                    <span className="text-muted-foreground">Examiner: </span>{" "}
                    {result.examDetails["External Examiner"]}
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-200">
                    <Badge
                      className="font-mono text-md font-medium"
                      variant={"secondary"}
                    >
                      Project Serial No: {result.currentProject.s_no}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 pb-6">
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-300">
                    {result.currentMember.name}
                  </h2>
                  <div className="text-primary font-medium flex items-center gap-2 mt-1">
                    <GraduationCap className="h-4 w-4" />
                    {result.currentMember.program}{" "}
                    <Badge variant="outline" className="font-mono">
                      {result.currentMember.enrollment}
                    </Badge>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-200">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      {result.currentMember.mobile}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Internal guide Card */}
              <Card className="overflow-hidden">
                <Badge
                  className="font-mono text-md font-medium"
                  variant={"secondary"}
                >
                  Internal Guide
                </Badge>
                <CardContent className="pt-2 pb-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-300">
                    {result.internal_guide}
                  </h3>
                  {result.internalGuideDetails && (
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-200">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a
                          href={`tel:${result.internalGuideDetails.contact}`}
                          className="text-primary hover:underline"
                        >
                          {result.internalGuideDetails.contact}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-200">
                        <a
                          href={`mailto:${result.internalGuideDetails.email}`}
                          className="text-primary hover:underline break-all"
                        >
                          {result.internalGuideDetails.email}
                        </a>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Company Sidebar Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Internship Provider
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      {result.company_name}
                    </h3>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {result.address}
                      </span>
                    </div>
                    {result.website && (
                      <div className="flex items-center gap-3">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <a
                          href={getValidUrl(result.website)}
                          target="_blank"
                          className="text-primary hover:underline"
                        >
                          {result.website}
                        </a>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="pt-2">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">
                        Mentor
                      </p>
                      <p className="text-sm font-medium">{result.mentor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Project & Team */}
            <div className="lg:col-span-2 space-y-6">
              {/* Project Main Card */}
              <Card className="border-l-4 border-l-primary shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardDescription>
                        <div className="font-medium text-lg">
                          Serial No: {result.currentProject.s_no}
                        </div>
                      </CardDescription>
                      <CardTitle className="text-2xl mt-1">
                        {result.currentProject.project_title}
                      </CardTitle>
                    </div>
                    <Badge variant="secondary" className="px-3 py-1">
                      Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-secondary p-4 rounded-xl border">
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        <Code2 className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-tight">
                          Front End Stack
                        </span>
                      </div>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">
                        {result.currentProject.front_end}
                      </p>
                    </div>
                    <div className="bg-secondary p-4 rounded-xl border">
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        <BookOpen className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-tight">
                          Back End Stack
                        </span>
                      </div>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">
                        {result.currentProject.back_end}
                      </p>
                    </div>
                  </div>

                  {result.currentProject.project_description && (
                    <div className="pt-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">
                        Description
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {result.currentProject.project_description}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Team Members Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 px-1">
                  <Users className="h-5 w-5 text-slate-400" />
                  <h3 className="font-bold text-slate-800 dark:text-slate-200">
                    Team Members
                  </h3>
                  <Badge variant="outline" className="ml-auto">
                    {result.currentProject.members.length} Total
                  </Badge>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {result.currentProject.members.map(
                    (member: any, i: number) => (
                      <Card
                        key={i}
                        className={`group hover:border-primary/50 transition-colors ${member.enrollment === result.currentMember.enrollment ? "bg-primary/5 border-primary/20" : ""}`}
                      >
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 group-hover:bg-primary group-hover:text-white transition-colors">
                            {member.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-sm">
                              {member.name}{" "}
                              {member.enrollment ===
                                result.currentMember.enrollment && (
                                <span className="text-[10px] text-primary ml-1">
                                  (You)
                                </span>
                              )}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {member.enrollment}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
