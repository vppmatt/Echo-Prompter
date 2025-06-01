# Echo-Prompter Multicode version

This is a fork of the Echo-Prompter project at https://github.com/sherwinvishesh/Echo-Prompter

In this fork the changes are:
- ability to load and save a script. This allows you to (for example) edit a script on a computer and then load it on a tablet. The feature requires a back-end which in this current version is hard coded as running at http://svr01:3334. The back end can be found at https://github.com/vppmatt/telepromptstore
- ability to view the teleprompter in full screen mode (addition of code that will work on an android tablet* + hiding the controls when playing) + hiding the footer when playing
- removing the stopwatch / clock feature (as I didn't want it!)
- a couple of small bug fixes (added misssing success icon / removing code that wasn't needed eg calls to functions that didn't exist)

* I can't get this to work on Android - the speech recognition cuts out after a second of silence and I haven't found a way to fix this. I'm therefore running this on a PC but with screen mirroring to android (using nomachine) which works well enough for my purposes.

THE REST OF THIS README FILE IS THE ORIGINAL README FROM SHERWINVISHESH'S PROJECT (SO THE IMAGE IS NOW OUT OF DATE)

# Echo-Prompter

Echo-Prompter is a modern, web-based teleprompter application designed to provide an easy-to-use, accessible platform for delivering speeches and presentations. Leveraging HTML, CSS, JavaScript, and the WebSpeech API, Echo-Prompter offers a seamless experience for users looking to practice and deliver their speeches with real-time feedback and control. The voice-activated teleprompter ensures smooth script navigation, enhancing engagement during presentations.

## Features

- **Voice Activation**: Navigate through your script with simple voice commands.
- **Real-Time Speech Recognition**: Utilizes the WebSpeech API for accurate, real-time speech recognition.
- **Customizable Display**: Adjust text size, scroll speed, and more to suit your presentation style.
- **Responsive Design**: Works across various devices, from desktops to tablets, ensuring accessibility anywhere.

## Getting Started

1. To get started with Echo-Prompter, clone this repository to your local machine.

```bash
git clone https://github.com/sherwinvishesh/Echo-Prompter.git
cd Echo-Prompter
```

2. Open `index.html` in your preferred web browser to launch the application. No additional setup is required.

## Usage
>**Note**: Echo-Prompter uses the WebSpeech API for accurate speech recognition, which may experience inaccuracies in noisy environments or with background disturbances.
1. **Prepare Your Script**: Enter your speech or presentation script into the teleprompter's text area.
2. **Customize Settings**: Adjust the teleprompter settings to match your reading preference, including font size and scroll speed.
3. **Start the Teleprompter**: Use the voice-activated commands or the on-screen controls to start, pause, or reset the teleprompter as needed during your practice or presentation.

## Options in Echo-Prompter

Echo-Prompter offers a wide range of options to customize your teleprompting experience to best suit your presentation needs. Here are the options available:

- **Start**: Begins the teleprompter scrolling, allowing you to start your presentation.
- **Pause**: Temporarily halts the teleprompter, enabling you to take a moment or catch up if needed.
- **Restart**: Resets and starts the teleprompter from the beginning of your script.
- **Edit Text**: Allows you to modify the script directly in the teleprompter interface.
- **Language**: Choose the language for speech recognition, ensuring accurate real-time feedback.
- **Background Color**: Customize the background color of the teleprompter for optimal visibility and comfort.
- **Text Color**: Change the color of your script's text to ensure it stands out against the background.
- **Text Size**: Adjust the size of the text to match your reading preference.
- **Font**: Select from various fonts to find the best match for readability and style.
- **Margin**: Set the margin size to adjust the text's layout within the teleprompter view.
- **Mirror Vertically**: Flip the text vertically, a useful feature for reflective teleprompter setups.
- **Mirror Horizontally**: Flip the text horizontally, aiding in certain presentation setups.
- **Show Recorded Text**: Display the text recognized by the speech recognition for real-time feedback.
- **Clear Settings**: Reset all customizations to their default settings for a fresh start.

These options are designed to provide you with full control over your teleprompting experience, ensuring that Echo-Prompter can be tailored to meet the specific needs of any presentation or speech.

## User Interface

![Echo-Prompter Screenshot](https://raw.githubusercontent.com/sherwinvishesh/Echo-Prompter/main/icons/Echo-Prompt%20Screeshot.png)



## Contributing

Contributions to enhance this project are welcomed. Please feel free to fork the repository, make changes, and submit pull requests.

## Support

If you encounter any issues or have any questions, please submit an issue on the GitHub issue tracker or feel free to contact me.


## License

Echo-Prompter is open source and available under the [Apache-2.0 license](LICENSE).

## Acknowledgments


- Thanks to everyone who visits and uses this page. Your interest and feedback are what keep us motivated.
- Special thanks to all the contributors who help maintain and improve this project. Your dedication and hard work are greatly appreciated.
- Icons used in Echo-Prompter are stored in the "icons" folder and are crucial for the user interface aesthetics.
- Special acknowledgment to Fabian Michel for his project [teleprompter](https://github.com/M-FF-M/teleprompter). It served as a significant inspiration for this project, demonstrating the powerful impact of WebSpeech API.

## Connect with Me

Feel free to reach out and connect with me on [LinkedIn](https://www.linkedin.com/in/sherwinvishesh) or [Instagram](https://www.instagram.com/sherwinvishesh/).

---

Made with ❤️ by Sherwin

