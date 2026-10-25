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
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-6 space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary uppercase flex items-center gap-1">
              <Users className="size-3" /> Faculty Directory
            </span>
            <span className="text-xs text-muted-foreground">
              {professorDetails.length} Faculty Members
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Professors & Faculty Contacts
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-lg leading-relaxed">
            Find official email addresses and phone numbers of Department of MCA & MScIT professors, coordinators, and guides.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            placeholder="Search by faculty name or email..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 h-10 rounded-xl bg-background border-border/70 text-xs shadow-xs"
          />
        </div>
      </div>

      {/* Directory Grid */}
      {filtered.length === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-dashed border-border/80 bg-muted/20 space-y-2">
          <GraduationCap className="size-8 mx-auto text-muted-foreground" />
          <h3 className="font-semibold text-sm">No faculty member found</h3>
          <p className="text-xs text-muted-foreground">
            No match for &quot;{searchText}&quot;. Please verify the spelling.
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setSearchText("")}
            className="rounded-lg text-xs mt-2"
          >
            Clear Search
          </Button>
        </div>
      ) : (
        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((prof) => {
              const initials = getInitials(prof.name);
              return (
                <div
                  key={prof.id}
                  className="p-4 rounded-2xl bg-card border border-border/70 hover:border-primary/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="size-11 rounded-2xl bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-105 transition-transform">
                      {initials}
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <h3 className="font-bold text-sm text-foreground truncate group-hover:text-primary transition-colors">
                        {prof.name}
                      </h3>
                      <div className="space-y-0.5">
                        <div className="flex items-center justify-between text-xs text-muted-foreground gap-2">
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

                  {/* Actions Bar */}
                  <div className="pt-2 border-t border-border/40 flex items-center justify-end gap-1.5">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-xl h-8 text-xs font-semibold gap-1.5"
                          asChild
                        >
                          <Link href={`tel:${prof.contact}`}>
                            <Phone className="size-3.5 text-primary" /> Call
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
                          variant="secondary"
                          size="icon"
                          className="size-8 rounded-xl"
                          asChild
                        >
                          <Link
                            href={`https://wa.me/91${prof.contact.replace(/\D/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src={"/icons/whatsapp.png"}
                              height={16}
                              width={16}
                              alt="WhatsApp"
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
                          variant="secondary"
                          size="icon"
                          className="size-8 rounded-xl"
                          asChild
                        >
                          <Link href={`mailto:${prof.email}`}>
                            <Mail className="size-3.5 text-primary" />
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
