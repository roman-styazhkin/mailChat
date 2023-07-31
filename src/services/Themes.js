class Themes {
  themes = {
    light: {
      "--app-theme": "#fff",
      "--app-bg-chat": "#fff",
      "--app-bg-chat-content": "#fff",
      "--app-heading-color": "#000",
      "--app-text-color": "#201f1e",
      "--app-ui-components": "#f6f6f6",
      "--app-text-time-color": "#605e5c",
      "--app-bg-active-chat": "#f0f5fb",
      "--app-border-color": "#e4e4e4",
      "--app-bg-message": "#f3f3f3",
      "--app-text-message": "#201f1e",
      "--app-hover-chat-bg": "#282e33",
    },

    dark: {
      "--app-theme": "#282e33",
      "--app-bg-chat": "#282e33",
      "--app-bg-chat-content": "#18191d",
      "--app-heading-color": "#fff",
      "--app-text-color": "#8d939e",
      "--app-ui-components": "#282e33",
      "--app-text-time-color": "#8d939e",
      "--app-bg-active-chat": "#009687",
      "--app-border-color": "#18191d",
      "--app-bg-message": "#282e33",
      "--app-text-message": "rgba(255, 255, 255, 0.8)",
      "--app-hover-chat-bg": "#000",
    },
  };

  onToggleTheme = (theme, callback) => {
    Object.entries(this.themes[theme]).forEach(([key, value]) => {
      document.body.style.setProperty(key, value);
    });

    callback(theme === "dark" ? "light" : "dark");
  };
}

export default Themes;
