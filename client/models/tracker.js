class Tracker {
  constructor(
    id,
    ownerId,
    title,
    company,
    hiringContact,
    description,
    technologies,
    status
  ) {
    this.id = id;
    this.ownerId = ownerId;
    this.title = title;
    this.company = company;
    this.hiringContact = hiringContact;
    this.description = description;
    this.technologies = technologies;
    this.status = status;
  }
}

export default Tracker;
