import { format, formatDistanceToNow, getTime, } from "date-fns";

// ----------------------------------------------------------------------

export function fDate(date) {
	return format(new Date(date), "dd MMMM yyyy");
}

export function fDateReverse(date) {
	return format(new Date(date), "yyyy-MM-dd");
}

export function fDateTime(date) {
	return format(new Date(date), "dd MMM yyyy HH:mm");
}

export function fDateTimeSuffix(date) {
	if (isNaN(new Date(date).getTime())) {
		console.error("Invalid date:", date);
		return "";
	}

	return format(new Date(date), "dd/MM/yyyy hh:mm p");
}

export function fToNow(date) {
	return formatDistanceToNow(new Date(date), {
		addSuffix: true,
	});
}

export function fTimestamp(date) {
	return date ? getTime(new Date(date)) : "";
}
