"use client";

import React, { useState } from "react";
import { professorDetails } from "@/lib/constants/professor-details.constant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Users,
  Search,
  Phone,
  Mail,
  Copy,
  Check,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ProfessorsPage() {
  const [searchText, setSearchText] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getInitials = (name: string) => {
    const clean = name.replace(/Dr\.|Prof\.|Mr\.|Ms\.|Mrs\./gi, "").trim();
    const parts = clean.split(" ").filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return (parts[0]?.[0] || "P").toUpperCase();
  };

  const filtered = professorDetails.filter(
    ({ name, email }) =>
      name.toLowerCase().includes(searchText.toLowerCase()) ||
      email.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-3.5 sm:py-6 md:py-8 space-y-3.5 sm:space-y-6 md:space-y-8">
      {/* Header Glass Banner */}
      <div className="p-4 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        <div className="space-y-1 sm:space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20 uppercase flex items-center gap-1 backdrop-blur-md">
              <Users className="size-3" /> Faculty Directory
            </span>
            <span className="text-[11px] sm:text-xs text-muted-foreground font-medium">
              {professorDetails.length} Faculty Members
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Professors &amp; Faculty Contacts
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-lg leading-relaxed">
            Find official email addresses and phone numbers of Department of MCA &amp; MScIT professors, coordinators, and guides.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 sm:size-4 text-muted-foreground" />
          <Input
            placeholder="Search by faculty name or email..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-9 sm:pl-10 h-9 sm:h-10 rounded-xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-white/[0.1] text-xs shadow-xs"
          />
        </div>
      </div>

      {/* Directory Grid */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center rounded-3xl border border-dashed border-white/60 dark:border-white/[0.1] bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md space-y-2">
          <GraduationCap className="size-8 mx-auto text-muted-foreground" />
          <h3 className="font-semibold text-sm">No faculty member found</h3>
          <p className="text-xs text-muted-foreground">
            No match for &quot;{searchText}&quot;. Please verify the spelling.
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setSearchText("")}
            className="rounded-xl text-xs mt-2"
          >
            Clear Search
          </Button>
        </div>
      ) : (
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
            {filtered.map((prof) => {
              const initials = getInitials(prof.name);
              return (
                <div
                  key={prof.id}
                  className="p-3 sm:p-5 rounded-xl sm:rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-xl backdrop-saturate-150 border border-white/60 dark:border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between space-y-2.5 sm:space-y-3 group"
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="size-9 sm:size-11 rounded-xl sm:rounded-2xl bg-primary/10 text-primary font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 border border-primary/20 backdrop-blur-md group-hover:scale-105 transition-transform">
                      {initials}
                    </div>
                    <div className="min-w-0 flex-1 space-y-0.5 sm:space-y-1">
                      <h3 className="font-bold text-xs sm:text-sm text-foreground truncate group-hover:text-primary transition-colors">
                        {prof.name}
                      </h3>
                      <div className="space-y-0.5">
                        <div className="flex items-center justify-between text-[11px] sm:text-xs text-muted-foreground gap-2">
                          <span className="truncate">{prof.email}</span>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                prof.email,
                                `mail_${prof.id}`,
                                "Email",
                              )
                            }
                            className="p-1 hover:text-foreground rounded transition-colors"
                            title="Copy Email"
                          >
                            {copiedId === `mail_${prof.id}` ? (
                              <Check className="size-3 text-emerald-500" />
                            ) : (
                              <Copy className="size-3" />
                            )}
                          </button>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground gap-2">
                          <span>{prof.contact}</span>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                prof.contact,
                                `phone_${prof.id}`,
                                "Phone",
                              )
                            }
                            className="p-1 hover:text-foreground rounded transition-colors"
                            title="Copy Phone"
                          >
                            {copiedId === `phone_${prof.id}` ? (
                              <Check className="size-3 text-emerald-500" />
                            ) : (
                              <Copy className="size-3" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2.5 border-t border-white/40 dark:border-white/[0.06] flex items-center justify-end gap-1.5">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          asChild
                          variant="ghost"
                          size="icon"
                          className="size-9 rounded-xl hover:bg-emerald-500/10 hover:text-emerald-600"
                        >
                          <Link
                            href={`https://wa.me/91${prof.contact}?text=Hello Professor ${prof.name}, I am a student at Parul University reaching out regarding academics.`}
                            target="_blank"
                          >
                            <Image
                              src="/icons/whatsapp.png"
                              alt="WhatsApp"
                              width={18}
                              height={18}
                              className="size-4"
                            />
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Message on WhatsApp</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          asChild
                          variant="ghost"
                          size="icon"
                          className="size-9 rounded-xl hover:bg-blue-500/10 hover:text-blue-600"
                        >
                          <Link href={`tel:${prof.contact}`}>
                            <Phone className="size-4" />
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Call {prof.contact}</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          asChild
                          variant="ghost"
                          size="icon"
                          className="size-9 rounded-xl hover:bg-primary/10 hover:text-primary"
                        >
                          <Link href={`mailto:${prof.email}`}>
                            <Mail className="size-4" />
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Send Email</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              );
            })}
          </div>
        </TooltipProvider>
      )}
    </div>
  );
}
