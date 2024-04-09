export type JobItem = {
  id: number;
  title: string;
  company: string;
  badgeLetters: string;
  daysAgo: number;
  relevanceScore: number;
};

export type JobItemExpanded = JobItem & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  salary: string;
  location: string;
  coverImgURL: string;
  companyURL: string;
};

export type SortBy = "relevant" | "recent";

export type PageDirection = "next" | "previous";
