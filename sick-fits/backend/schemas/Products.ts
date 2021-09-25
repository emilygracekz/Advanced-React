import { integer, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

export const Product = list({
    //todo
    //access
    fields: {
        name: text({ isRequired: true}),
        description: text({ ui: {
            displayMode: 'textarea',
        },
    }),
    status: select({
        options: [
            {label: "Draft", value: "DRAFT" },
            {label: "Avalible", value: "AVALIBLE" },
            {label: "Unavalible", value: "UNAVALIBLE" },
        ],
        defaultValue: "DRAFT",
        ui: {
            displayMode: 'segmented-control',
            createView: { fieldMode: 'hidden' },
        },
    }),
    price: integer(),
    //TODO: photo
    }
})