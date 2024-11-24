import pandas as pd

# Path to the input CSV file
input_csv_path = '/Users/zachtrani/Documents/spotify-2023.csv'
output_csv_path = '/Users/zachtrani/Documents/spotify-2023-cleaned.csv'

# Read the CSV file into a DataFrame, treating all columns as strings to prevent conversion
df = pd.read_csv(input_csv_path, dtype=str)

# List of columns that should be integers
integer_columns = [
    'artist_count', 'released_year', 'released_month', 'released_day',
    'in_spotify_playlists', 'in_spotify_charts', 'streams', 'in_apple_playlists',
    'in_apple_charts', 'in_deezer_playlists', 'in_deezer_charts', 'in_shazam_charts',
    'bpm', 'danceability_percent', 'valence_percent', 'energy_percent',
    'acousticness_percent', 'instrumentalness_percent', 'liveness_percent', 'speechiness_percent'
]


# Process the integer columns
for col in integer_columns:
    # Skip the column if it does not exist in the DataFrame
    if col not in df.columns:
        continue

    # For 'streams' and 'in_shazam_charts', slice off the last two characters if not blank
    if col in ['streams', 'in_shazam_charts']:
        df[col] = df[col].astype(str).apply(lambda x: x[:-2] if x and x != 'nan' else float('nan'))
    else:
        # For other integer columns, just remove commas
        df[col] = df[col].astype(str).str.replace(',', '')

    # Convert the column to integers, coercing errors to NaN
    df[col] = pd.to_numeric(df[col], errors='coerce', downcast='integer')


# Save the cleaned DataFrame to a new CSV file
df.to_csv(output_csv_path, index=False)
