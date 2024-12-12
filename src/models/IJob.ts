export interface IJob {
    id: string;
    headline: string;
    logo_url: string;
    employer: {
        name: string;
    }
    working_hours_type: {
        label: string;
    }
    workplace_address: {
        city: string;
        municipality: string;
    }
    publication_date: string;
}
export interface IJobDetails extends IJob  {
    webpage_url: string;
    application_deadline:string;
    description: {
        text: string
        text_formatted:string;
    };
    workplace_address: {
        street_address: string;
        postcode: string;
        city: string;
        municipality: string;
    };
    application_details: {
        url: string
    };
    duration: {
        label:string;
    };
    salary_type: {
        label:string;
    };
}




