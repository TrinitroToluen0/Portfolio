import { TFunction } from "i18next";

/**
 * Calculate the duration between two dates in years and months.
 *
 * @param start - The start date.
 * @param end - The end date.
 * @returns An array where the first element is the number of years
 *          and the second element is the number of months.
 */
export const getDatesDuration = (start: Date, end: Date): [number, number] => {
    const startYear = start.getFullYear();
    const startMonth = start.getMonth();
    const endYear = end.getFullYear();
    const endMonth = end.getMonth();

    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return [years, months];
};

export const formatDuration = (start: Date, end: Date, t: TFunction): string => {
    const [years, months] = getDatesDuration(start, end);
    let output = "";

    if (years > 0) {
        output += `${years} ${years > 1 ? t("words.years") : t("words.year")}`;
    }

    if (months > 0) {
        if (output) output += ", ";
        output += `${months} ${months > 1 ? t("words.months") : t("words.month")}`;
    }

    return output.toLowerCase() || "";
};