export interface AccordionModel {
    id: number;
    name: string;
    logo: string;
    attrText: string;
    links: string[];
    main: [ {
        topic:string;
        updated:string,
        description:string,
        officialDocs:string,
        images: string[],
    } ]
}

