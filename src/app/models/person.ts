export interface Person {
  id: string;
  fullName: string;
  profilePicture: string;
  links: {
    [icon: string]: string;
  };
}
