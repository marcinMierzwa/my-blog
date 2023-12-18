export interface SkillModel {
    id: number;
    name: string;
    logo: string;
    attrText: string;
    // links: string[];
    content: 
        {
        topic: string;
        updated: string,
        description: string,
        officialDocs: string,
        images: string[],
    }[],
 
}

