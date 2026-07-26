# `opd_queue_panel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_queue_panel_id | int(11) | NO | PRI | 0 |  |  |
| computer_name | varchar(200) | YES | UNI | NULL |  |  |
| queue_line_count | int(11) | YES |  | NULL |  |  |
| video_stream_url | varchar(200) | YES |  | NULL |  |  |
| active_datetime | datetime | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| text_overlay_font_size | int(11) | YES |  | NULL |  |  |
| text_overlay_top | int(11) | YES |  | NULL |  |  |
| text_overlay_left | int(11) | YES |  | NULL |  |  |
| text_overlay_text | text | YES |  | NULL |  |  |
| text_overlay_enable | char(1) | YES |  | NULL |  |  |
| show_bottom_panel | char(1) | YES |  | NULL |  |  |
| video_stretch | char(1) | YES |  | NULL |  |  |
| show_patient_info | char(1) | YES |  | NULL |  |  |
| queue_panel_ip | varchar(200) | YES |  | NULL |  |  |
| text_overlay_font_color | int(11) | YES |  | NULL |  |  |
| text_overlay_bg_color | int(11) | YES |  | NULL |  |  |
| active_datetime_tick | int(11) | YES |  | NULL |  |  |
| show_picture | char(1) | YES |  | NULL |  |  |
| show_patient_picture | char(1) | YES |  | NULL |  |  |
| rtc_port | int(11) | YES |  | NULL |  |  |
| use_dep_queue | char(1) | YES |  | NULL |  |  |
| filter_finance_complete | char(1) | YES |  | NULL |  |  |
| show_wait_queue | char(1) | YES |  | NULL |  |  |
| queue_font_size | int(11) | YES |  | NULL |  |  |
| counter_font_size | int(11) | YES |  | NULL |  |  |
| counterno_font_size | int(11) | YES |  | NULL |  |  |
| use_ttsdroid | char(1) | YES |  | NULL |  |  |
| ttsdroid_uri | varchar(200) | YES |  | NULL |  |  |
| auto_row_number | char(1) | YES |  | NULL |  |  |
| wait_font_size | int(11) | YES |  | NULL |  |  |
| wait_panel_height | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_computer_name | computer_name | yes | 1 |
| PRIMARY | opd_queue_panel_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "opd_queue_panel_id": 1,
    "computer_name": "A56-0114",
    "queue_line_count": null,
    "video_stream_url": null,
    "active_datetime": "2024-03-28 11:36:55",
    "depcode": null,
    "text_overlay_font_size": null,
    "text_overlay_top": null,
    "text_overlay_left": null,
    "text_overlay_text": null,
    "text_overlay_enable": null,
    "show_bottom_panel": null,
    "video_stretch": null,
    "show_patient_info": null,
    "queue_panel_ip": "10.10.10.9",
    "text_overlay_font_color": null,
    "text_overlay_bg_color": null,
    "active_datetime_tick": 1711625815,
    "show_picture": null,
    "show_patient_picture": null,
    "rtc_port": 81,
    "use_dep_queue": null,
    "filter_finance_complete": null,
    "show_wait_queue": null,
    "queue_font_size": null,
    "counter_font_size": null,
    "counterno_font_size": null,
    "use_ttsdroid": null,
    "ttsdroid_uri": null,
    "auto_row_number": null,
    "wait_font_size": null,
    "wait_panel_height": null
  }
]
```
