# Udemy Course Time Left Tracker Firefox Extension

A Firefox extension that helps you track and calculate the remaining time for your Udemy courses. No network calls, no data collection, no tracking. Get an accurate estimate of how long it will take to complete your course based on the total course duration.

## Features

- Automatically calculates total remaining time for your current Udemy course
- Shows the total time left for the course in each section
- Works on any Udemy course page

## Installation

1. Visit the Firefox Add-ons store
2. Search for "Udemy Course Time Left Tracker" or click [here](#)
3. Click "Add to Firefox"
4. Follow the prompts to complete installation

## Usage

1. Navigate to any Udemy course you're enrolled in
2. The extension will automatically calculate the total time left for the course in each section
3. The time left will be displayed next to the section time

## How It Works

The extension works by:
- Scanning the course curriculum for video lengths
- Displaying the total time left for the course in each section

## Privacy

This extension:

- Only activates on Udemy course pages
- Does not collect any personal information
- Does not invoke any external services
- Does not track your browsing history
- Works completely offline
- Does not require any special permissions beyond accessing Udemy course pages

## Development

If you want to contribute to the development:

```bash
# Clone the repository
git clone https://github.com/yourusername/udemy-time-calculator

# Load the extension in Firefox for testing
about:debugging > This Firefox > Load Temporary Add-on > select manifest.json
```

### Project Structure

```
udemy-course-time-left/
├── manifest.json
├── content.js
├── LICENSE
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have suggestions:
- Open an issue on GitHub

## Acknowledgments

- Thanks to the Udemy platform for providing course information

## Changelog

### Version 1.0.0
- Initial release
- Basic time calculation functionality

---

Made with ♥ by Maciej Bąba
