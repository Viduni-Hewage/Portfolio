import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Web', value: 'web' },
                    { title: 'Mobile', value: 'mobile' },
                    { title: 'Web + Mobile', value: 'web+mobile' },
                    { title: 'UI/UX Design', value: 'uiux' },
                    { title: 'Other', value: 'other' },
                ],
                layout: 'dropdown',
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'otherType',
            title: 'Other Project Type',
            type: 'string',
            hidden: ({ parent }) => parent?.projectType !== 'other',
            validation: (Rule) =>
                Rule.custom((fieldValue, context) => {
                    const parent = context.parent as { projectType?: string }
                    if (parent?.projectType === 'other' && !fieldValue) {
                        return 'Other Project Type is required when Project Type is "Other"'
                    }
                    return true
                }),
        },
        {
            name: 'mode',
            title: 'Mode',
            type: 'string',
            options: {
                list: [
                    { title: 'Individual', value: 'individual' },
                    { title: 'Group', value: 'group' },
                ],
                layout: 'radio',
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 5,
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'contribution',
            title: 'My Contribution',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        },
        {
            name: 'githubLink',
            title: 'GitHub Link',
            type: 'url',
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        },
    ],
})
