import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'organization',
            title: 'Organization',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
            description: 'Optional: Link to open when the image is clicked'
        }),
        defineField({
            name: 'number',
            title: 'Number',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'startMonth',
            title: 'Start Month',
            type: 'string',
            options: {
                list: [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ]
            },
        }),
        defineField({
            name: 'startYear',
            title: 'Start Year',
            type: 'number',
        }),

        defineField({
            name: 'isPresent',
            title: 'Present',
            type: 'boolean',
            initialValue: false,
            description: 'Check this if this is your current position',
        }),

        defineField({
            name: 'endMonth',
            title: 'End Month',
            type: 'string',
            options: {
                list: [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ]
            },
        }),

        defineField({
            name: 'endYear',
            title: 'End Year',
            type: 'number',
            options: {
                list: Array.from({ length: 30 }, (_, i) => 2025 - i),
            },
            validation: (Rule) =>
                Rule.custom((endYear, context) => {
                    const isPresent = context?.document && (context.document as any).isPresent
                    if (!isPresent && !endYear) {
                        return 'End year is required unless marked Present'
                    }
                    return true
                }),
        }),

        defineField({
            name: 'details',
            title: 'Other Details',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Add bullet points (optional)',
        }),
    ],
})
