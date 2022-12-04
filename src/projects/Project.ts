export class Project {
  id: string | undefined;
  name: string = '';
  address: string = '';
  phoneNumber: string = '';
  email: string = '';
  description: string = "";
  imageUrl: string = "";
  latitude: string = "";
  longitude: string = "";
  mapUrl: string = "";
  isActive: boolean = false;
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isSoftDeleted: boolean = false;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.address) this.address = initializer.address;
    if (initializer.phoneNumber) this.phoneNumber = initializer.phoneNumber;
    if (initializer.email) this.email = initializer.email;
    if (initializer.description) this.description = initializer.description;
    if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
    if (initializer.latitude) this.latitude = initializer.latitude;
    if (initializer.longitude) this.longitude = initializer.longitude;
    if (initializer.mapUrl) this.mapUrl = initializer.mapUrl;
    if (initializer.isActive) this.isActive = initializer.isActive;
    if (initializer.createdAt) this.createdAt = initializer.createdAt;
    if (initializer.updatedAt) this.updatedAt = initializer.updatedAt;
    if (initializer.deletedAt) this.deletedAt = initializer.deletedAt;
  }
}
