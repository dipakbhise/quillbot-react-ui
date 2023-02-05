import {
  CloseOutlined,
  DiamondOutlined,
  Done,
  PauseCircleOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";

export const pricingPlans = [
  {
    name: "Free",
    icon: "",
    btnText: "Sign Up - It's Free",
    desc: [
      {
        title: "125 words in the Paraphraser",
        icon: <Done style={{ color: "#499557" }} />,
      },
      {
        title: "Standard and Fluency modes",
        icon: <Done style={{ color: "#499557" }} />,
      },
      {
        title: "3 synonym options",
        icon: <Done style={{ color: "#499557" }} />,
      },
      {
        title: "1 Freeze word or phrase",
        icon: <Done style={{ color: "#499557" }} />,
      },
      {
        title: "1200 words in the Summarizer",
        icon: <Done style={{ color: "#499557" }} />,
      },
      {
        title: "Faster processing speed",
        icon: <CloseOutlined style={{ color: "#FB3F4B" }} />,
      },
      {
        title: "Advanced grammar rewrites",
        icon: <CloseOutlined style={{ color: "#FB3F4B" }} />,
      },
      {
        title: "Compare Modes (Desktop only)",
        icon: <CloseOutlined style={{ color: "#FB3F4B" }} />,
      },
      {
        title: "Plagiarism Checker*",
        icon: <CloseOutlined style={{ color: "#FB3F4B" }} />,
      },
      {
        title: "Tone detection",
        icon: <CloseOutlined style={{ color: "#FB3F4B" }} />,
      },
    ],
    details: "No Credit Card Required",
    background: "#499557",
    hoverBg: "#308140",
    url: "https://quillbot.com/signup",
    id: 1,
  },
  {
    name: "Premium",
    icon: <DiamondOutlined style={{ color: "white", marginRight: "8px" }} />,
    btnText: "Upgrade To Premium",
    desc: [
      {
        title: "Unlimited words in the Paraphraser",
        icon: <Done style={{ color: "#DC9E00" }} />,
        tooltip: {
          title: "Write Faster",
          desc: "You’ll complete your work up to 75% faster with QuillBot.",
          img: "",
        },
      },
      {
        title:
          "Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative modes",
        icon: <Done style={{ color: "#DC9E00" }} />,
        tooltip: {
          title: "Explore Multiple Styles",
          desc: "There's a mode for every occasion, whether formal or casual.",
          img: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/multiple-styles-tooltip.png",
        },
      },
      {
        title: "4 synonym options",
        icon: <Done style={{ color: "#DC9E00" }} />,
        tooltip: {
          title: "Add More Synonyms",
          desc: "Full use of the Synonym Slider can increase the uniqueness of your text.",
          img: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/synonyms-tooltip.png",
        },
      },
      {
        title: "Unlimited Freeze words and phrases",
        icon: <Done style={{ color: "#DC9E00" }} />,
        tooltip: {
          title: "Prevent Words From Changing",
          desc: "Industry-specific terms (technical, scientific, medical, etc.) won't get changed during paraphrasing.",
          img: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/freeze-tooltip.png",
        },
      },
      {
        title: "6000 words in the Summarizer",
        icon: <Done style={{ color: "#DC9E00" }} />,
        tooltip: {
          title: "Find The Key Points",
          desc: "Research time is greatly reduced when articles are trimmed to their main points.",
          img: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/key-points-tooltip.png",
        },
      },
      {
        title: "Faster processing speed",
        icon: <Done style={{ color: "#DC9E00" }} />,
        tooltip: {
          title: "Enjoy Increased Paraphrasing Speed",
          desc: "Fifteen sentences are paraphrased at once instead of only two sentences with a free account.",
          img: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/paraphrasing-speed-tooltip.png",
        },
      },
      {
        title: "Advanced grammar rewrites",
        icon: <Done style={{ color: "#DC9E00" }} />,
        tooltip: {
          title: "Get Immediate Recommendations",
          desc: "Rewritten sentences are suggested for text that is too complicated or doesn't flow well.",
          img: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/recommendations-tooltip.png",
        },
      },
      {
        title: "Compare Modes (Desktop only)",
        icon: <Done style={{ color: "#DC9E00" }} />,
        tooltip: {
          title: "Choose The Best Rewrite",
          desc: "You'll be able to compare outputs from multiple modes.",
          img: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/compare-modes-tooltip.png",
        },
      },
      {
        title: "Plagiarism Checker*",
        icon: <Done style={{ color: "#DC9E00" }} />,
        tooltip: {
          title: "Detect Plagiarism",
          desc: "You can avoid accidental plagiarism by ensuring all outside sources are properly cited.",
          img: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/plagiarism-tooltip.png",
        },
      },
      {
        title: "Tone detection",
        icon: <Done style={{ color: "#DC9E00" }} />,
        tooltip: {
          title: "Communicative Insights",
          desc: "Understand how text can impact every audience",
          img: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/tone-tooltip-new.svg",
        },
      },
    ],
    details: "3-Day Money-Back Guarantee",
    background: "#DC9E00",
    hoverBg: "#dcbb00",
    url: "https://quillbot.com/upgrade",
    id: 2,
  },
];

export const features = [
  {
    title: "100% Money-Back Guarantee",
    desc: "Changed your mind? We’ll refund your payment within 3 days of purchase.",
    icon: <ThumbUpOutlined />,
  },
  {
    title: "Pause Your Subscription",
    desc: "Taking a break? Your subscription also pauses when you do!",
    icon: <PauseCircleOutlined />,
  },
];

export const siteLinks = [
  {
    id: 1,
    title: "Writing Tools",
    links: [
      { text: "Paraphrasing Tool", url: "https://quillbot.com/" },
      { text: "Summarizer", url: "https://quillbot.com/summarize" },
      { text: "Co-Writer", url: "https://quillbot.com/co-writer" },
      {
        text: "Plagiarism Checker",
        url: "https://quillbot.com/plagiarism-checker",
      },
      { text: "Word Counter", url: "https://quillbot.com/word-counter" },
    ],
  },
  {
    id: 1,
    title: "Free Grammar Tools",
    links: [
      { text: "Grammar Checker", url: "https://quillbot.com/grammar-check" },
      { text: "Proofreader", url: "https://quillbot.com/online-proofreader" },
      { text: "Spell Checker", url: "https://quillbot.com/spell-checker" },
      {
        text: "Punctuation Checker",
        url: "https://quillbot.com/punctuation-checker",
      },
      { text: "Essay Checker", url: "https://quillbot.com/essay-checker" },
    ],
  },
  {
    id: 1,
    title: "Citation Tools",
    links: [
      {
        text: "Citation Generator",
        url: "https://quillbot.com/citation-generator",
      },
      {
        text: "APA Citation Generator",
        url: "https://quillbot.com/citation-generator/apa",
      },
    ],
  },
  {
    id: 1,
    title: "Company",

    links: [
      { text: "Team", url: "https://quillbot.com/about" },
      { text: "Careers", url: "https://quillbot.com/careers" },
      { text: "Help Center", url: "https://help.quillbot.com/hc/en-us" },
      { text: "Contact Us", url: "https://quillbot.com/contact" },
    ],
  },

  {
    id: 1,
    title: "Extensions",
    links: [
      {
        text: "QuillBot for Chrome",
        url: "https://chrome.google.com/webstore/detail/quillbot-for-chrome/iidnbdjijdkbmajdffnidomddglmieko?hl:%20en-US&utm_source=quillbot.com&utm_medium=referral&utm_campaign=side_navbar-link",
        icon: "https://assets.quillbot.com/images/theme/commonImages/chrome.png",
      },
      {
        text: "QuillBot for Chrome",
        url: "https://quillbot.com/word",
        icon: "https://assets.quillbot.com/images/theme/commonImages/msWord.svg",
      },
    ],
  },
  {
    id: 1,
    title: "Student Resources",
    links: [
      { text: "Tools & Videos", url: "https://quillbot.com/student-resources" },
      { text: "Educational Courses", url: "https://quillbot.com/courses/" },
    ],
  },
  {
    id: 1,
    title: "Knowledge Base",
    links: [
      {
        text: "Paraphrasing Guide",
        url: "https://quillbot.com/guides/paraphrasing",
      },
      {
        text: "AI Writing Assistant",
        url: "https://quillbot.com/guides/ai-writing-assistant",
      },
      { text: "QuillBot Blog", url: "https://quillbot.com/blog/" },
    ],
  },
  {
    id: 1,
    title: "Services",
    links: [
      { text: "Premium", url: "https://quillbot.com/premium" },
      { text: "Affiliate", url: "https://quillbot.com/affiliates" },
      { text: "Request a Demo", url: "https://quillbot.com/contact" },
    ],
  },
];

export const legal = [
  { text: "Privacy Policy", url: "https://quillbot.com/privacy" },
  { text: "Terms of Service", url: "https://quillbot.com/terms" },
  { text: "CCPA", url: "https://quillbot.com/ccpa" },
  { text: "Copyright Policy", url: "https://quillbot.com/copyright-policy" },
];
