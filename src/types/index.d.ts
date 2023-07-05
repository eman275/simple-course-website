export interface CourseInterface {
  id: string;
  name: string;
  description?: string;
  thumbnail?: string;
  isNew: boolean;
  drafts: CourseInterface[];
}
