import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, `Il nome deve contenere almeno 3 caratteri`)
    .max(50, `Il nome non può superare i 50 caratteri`),
  service: z
    .string()
    .min(1, "Seleziona un servizio"),
  message: z
    .string()
    .min(10, `Il messaggio deve contenere almeno 10 caratteri`)
    .max(500, `Il messaggio non può superare i 500 caratteri`),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type userCreateProps = z.infer<typeof userCreateSchema>;

const userCreateSchema = z.object({
  email: z.string().email({ message: "Invalid email" }).describe("user email"),
  first_name: z
    .string()
    .regex(/^[a-zA-Z]+$/, { message: "First name must only contain letters" })
    .min(3, { message: "First name is required" })
    .describe("user first name"),
  last_name: z
    .string()
    .regex(/^[a-zA-Z]+$/, { message: "Last name must only contain letters" })
    .min(3, { message: "Last name is required" })
    .describe("user last name"),
  profile_image_url: z
    .string()
    .url({ message: "Invalid URL" })
    .optional()
    .describe("user profile image URL"),
  user_id: z.string().describe("user ID"),
});

export type userUpdateProps = z.infer<typeof userUpdateSchema>;

const userUpdateSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email" })
    .nonempty({ message: "Email is required" })
    .describe("user email"),
  first_name: z
    .string()
    .regex(/^[a-zA-Z]+$/, { message: "First name must only contain letters" })
    .describe("user first name"),
  last_name: z
    .string()
    .regex(/^[a-zA-Z]+$/, { message: "Last name must only contain letters" })
    .describe("user last name"),
  profile_image_url: z
    .string()
    .url({ message: "Invalid URL" })
    .optional()
    .describe("user profile image URL"),
  user_id: z.string().describe("user ID"),
});

export type Article = {
  id: string;
  slug: string;
  alternativeSlugs: AlternativeSlugs;
  createdAt: Date;
  updatedAt: Date;
  promotedAt: Date | null;
  width: number;
  height: number;
  color: string;
  blurHash: string;
  description: null | string;
  altDescription: string;
  breadcrumbs: any[];
  urls: Urls;
  links: ArticleLinks;
  likes: number;
  likedByUser: boolean;
  currentUserCollections: any[];
  sponsorship: null;
  topicSubmissions: TopicSubmissions;
  assetType: AssetType;
  user: User;
}

export type AlternativeSlugs = {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
}

export enum AssetType {
  Photo = "photo",
}

export type ArticleLinks = {
  self: string;
  html: string;
  download: string;
  downloadLocation: string;
}

export type TopicSubmissions = {
  health?: Health;
}

export type Health = {
  status: string;
  approvedOn: Date;
}

export type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  smallS3: string;
}

export type User = {
  id: string;
  updatedAt: Date;
  username: string;
  name: string;
  firstName: string;
  lastName: string;
  twitterUsername: null | string;
  portfolioURL: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profileImage: ProfileImage;
  instagramUsername: null | string;
  totalCollections: number;
  totalLikes: number;
  totalPhotos: number;
  totalPromotedPhotos: number;
  totalIllustrations: number;
  totalPromotedIllustrations: number;
  acceptedTos: boolean;
  forHire: boolean;
  social: Social;
}

export type UserLinks = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export type ProfileImage = {
  small: string;
  medium: string;
  large: string;
}

export type Social = {
  instagramUsername: null | string;
  portfolioURL: null | string;
  twitterUsername: null | string;
  paypalEmail: null;
}
