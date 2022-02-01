export default class RegexConstants{
    static NAME_REGEX = /^[A-Za-z\u0590-\u05fe ]+$/;
    static EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
}