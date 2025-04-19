export const getColorByCategory = (category: string): string => {
    switch (category.toLowerCase()) {
        case 'skog': return '#80cc91';
        case 'fjell': return '#c8d2d0';
        case 'avsides': return '#de9370';
        case 'familie': return '#d6de93';
        case 'innsjø': return '#6dd7c9';
        case 'romantisk': return '#e5b4e7';
        case 'luksus': return '#ccaf80';
        case 'enkel': return '#a7b0a4';
        default: return '#e7e7e8';
    }
}