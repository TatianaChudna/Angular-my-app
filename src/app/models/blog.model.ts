export class BlogModel {
  public title: string;
  public description: string;
  public image: string;
  public descriptionText: string;

  constructor(title: string, description: string, image: string, descriptionText: string) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.descriptionText = descriptionText;
  }
}
