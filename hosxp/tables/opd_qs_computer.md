# `opd_qs_computer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_computer_id | int(11) | NO | PRI | 0 |  |  |
| opd_qs_computer_name | varchar(200) | YES | UNI | NULL |  |  |
| opd_qs_location_id | int(11) | YES | MUL | NULL |  |  |
| active_datetime | datetime | YES |  | NULL |  |  |
| active_datetime_tick | int(11) | YES | MUL | NULL |  |  |
| queue_panel_ip | varchar(150) | YES |  | NULL |  |  |
| rtc_port | int(11) | YES |  | NULL |  |  |
| display_column | int(11) | YES |  | NULL |  |  |
| mac_address | varchar(50) | YES | MUL | NULL |  |  |
| device_information | varchar(250) | YES |  | NULL |  |  |
| speak_tts | char(1) | YES |  | NULL |  |  |
| speak_tts_template | text | YES |  | NULL |  |  |
| speak_wave_template | text | YES |  | NULL |  |  |
| show_marquee | char(1) | YES |  | NULL |  |  |
| marquee_text | text | YES |  | NULL |  |  |
| rss_feed_url | varchar(250) | YES |  | NULL |  |  |
| show_media_view | char(1) | YES |  | NULL |  |  |
| show_media_size | double(15,3) | YES |  | NULL |  |  |
| opd_qs_computer_media_id | int(11) | YES |  | NULL |  |  |
| rss_feed_size | double(15,3) | YES |  | NULL |  |  |
| rss_feed_font_size | double(15,3) | YES |  | NULL |  |  |
| mute_media_sound | char(1) | YES |  | NULL |  |  |
| show_wait_queue | char(1) | YES |  | NULL |  |  |
| show_noshow_queue | char(1) | YES |  | NULL |  |  |
| show_noshow_queue_row | int(11) | YES |  | NULL |  |  |
| show_noshow_queue_font_size | int(11) | YES |  | NULL |  |  |
| show_noshow_queue_height | int(11) | YES |  | NULL |  |  |
| show_noshow_queue_font_color | int(11) | YES |  | NULL |  |  |
| show_noshow_queue_room_width | int(11) | YES |  | NULL |  |  |
| ipd_nurse_shift_id | int(11) | YES |  | NULL |  |  |
| ipd_nurse_shift_date | date | YES |  | NULL |  |  |
| ipd_nurse_shift_ward | varchar(4) | YES |  | NULL |  |  |
| ipd_active | char(1) | YES |  | NULL |  |  |
| ns_media_size | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_location_tick | opd_qs_location_id | no | 1 |
| ix_location_tick | active_datetime_tick | no | 2 |
| ix_location_tick_index | active_datetime_tick | no | 1 |
| ix_location_tick_index | opd_qs_location_id | no | 2 |
| ix_mac_address | mac_address | no | 1 |
| ix_opd_qs_computer_name | opd_qs_computer_name | yes | 1 |
| PRIMARY | opd_qs_computer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
