import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Skill Name',
            type: 'string',
            description: 'Name of the skill (e.g., React, Node.js, MongoDB)',
            validation: Rule => Rule.required(),
        },
        {
            name: 'title',
            title: 'Category',
            type: 'string',
            description: 'Select the category for this skill',
            options: {
                list: [
                    { title: 'Frontend', value: 'frontend' },
                    { title: 'Backend', value: 'backend' },
                    { title: 'Databases', value: 'databases' },
                    { title: 'Tools & Frameworks', value: 'toolsFrameworks' },
                ],
                layout: 'dropdown'
            },
            validation: Rule => Rule.required(),
        },
        {
            name: 'icon',
            title: 'Icon URL',
            type: 'url',
            description: 'Paste the image URL for the skill logo',
            validation: Rule => Rule.required().uri({ allowRelative: false }),
        },
    ],
})
