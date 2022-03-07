export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "advisor",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            type: "string",
            options:{
                list:[
                    { value: "ML Research", title: "ML Research"},
                    { value: "Engineering Project", title: "Engineering Project"},
                    { value: "Course Project", title: "Course Project"},
                ],
            },
        },
        {
            name: "link",
            type: "url",
        }
    ]
}