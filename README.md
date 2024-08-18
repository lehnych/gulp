# Quelle
https://www.youtube.com/watch?v=Hh1aDoWMJXA
https://www.youtube.com/watch?v=ODl2iCkIPpg

# node.js installieren (18.12.1)
https://nodejs.org/en/download/prebuilt-installer

# node.js Version prüfen
    node -v

# Git Installieren
## MacOs
- Git Installation prüfen

        git --version

  Wenn Git installiert ist, siehst du die Version.


- Falls nicht, kannst du Git über Homebrew installieren:

        brew install git

- PhpStorm öffnen


- Git in PhpStorm konfigurieren
  - Gehe zu Preferences (Cmd + ,).
  - Navigiere zu Version Control > Git.
  - Stelle sicher, dass der Pfad zu deinem Git-Executable korrekt ist. Standardmäßig sollte dies

            /usr/bin/git 

    sein. Du kannst dies überprüfen, indem du auf Test klickst. Wenn alles in Ordnung ist, sollte die Nachricht „Git executed successfully“ erscheinen.



- Git Repository initialisieren oder hinzufügen
  - Neues Git-Repository erstellen:
  - Gehe zu VCS > Create Git Repository....
  - Wähle den Ordner deines Projekts aus und klicke auf OK.
  - Existierendes Git-Repository hinzufügen:
  - Falls du bereits ein Git-Repository hast, kannst du es klonen: Gehe zu VCS > Git > Clone und gib die Repository-URL ein.
  - Wähle einen Zielordner und klicke auf Clone.


- Git-Befehle verwenden
  - Jetzt kannst du alle üblichen Git-Befehle direkt in PhpStorm verwenden:
  - Commit: Gehe zu VCS > Commit oder benutze Cmd + K.
  - Push: Gehe zu VCS > Git > Push oder benutze Cmd + Shift + K.
  - Pull: Gehe zu VCS > Git > Pull.


- SSH-Schlüssel einrichten (optional)
  Falls du SSH für Git verwendest, stelle sicher, dass deine SSH-Schlüssel richtig konfiguriert sind. Dies kannst du über die Konsole tun:

        ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

  Füge deinen öffentlichen Schlüssel zu deinem Git-Host (z.B. GitHub, GitLab) hinzu.

## Windows
https://git-scm.com/download/win
Heruntenladen und installieren


# Projekt inizialisieren
npm init

# Gulm Global installieren
npm i gulp-cli -g

# Gulp local installieren
npm i gulp@4.0.2 -D

# Sass Plug-Ins
npm i sass@1.58.3 -D
npm i gulp-sass@5.1.0 -D
npm i gulp-autoprefixer@8.0.0 -D
npm i gulp-sourcemaps@3.0.0 -D

# JS Plug-Ins
npm i gulp-uglify-es@3.0.0 -D
npm i gulp-concat@2.6.1 -D

# Img Plug-Ins
npm i gulp-avif@1.1.1 -D
npm i gulp-webp@4.0.1 -D
npm i gulp-imagemin@7.1.0 -D
npm i gulp-newer@1.4.0 -D
npm i gulp-svg-sprite@2.0.3 -D

# Schrifen Plu-Ins
// Windows
npm i gulp-fonter@0.3.0 -D
// Mac
npm i gulp-fonter-unx@0.3.0 -D
npm i gulp-ttf2woff2@4.0.1 -D

# HTML Plug-Ins
npm i gulp-file-include@2.3.0 -D
npm i gulp-version-number@0.2.4 -D
npm i gulp-htmlclean -D

# Restliche Plug-Ins
npm i browser-sync@2.28.1 -D
npm i gulp-clean@0.4.0 -D

# Biblioteken
npm i @splidejs/splide@4.1.4 -D

