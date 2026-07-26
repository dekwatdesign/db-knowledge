# `opd_qs_room`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_room_id | int(11) | NO | PRI | 0 |  |  |
| opd_qs_room_name | varchar(200) | YES | MUL | NULL |  |  |
| opd_qs_room_number | varchar(10) | YES |  | NULL |  |  |
| doctor_code | varchar(20) | YES | MUL | NULL |  |  |
| doctor_in_room | char(1) | YES |  | NULL |  |  |
| queue_slot_number | varchar(20) | YES |  | NULL |  |  |
| room_active | char(1) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| opd_qs_location_id | int(11) | YES | MUL | NULL |  |  |
| current_queue | varchar(10) | YES |  | NULL |  |  |
| queue_font1_size | int(11) | YES |  | NULL |  |  |
| queue_font2_size | int(11) | YES |  | NULL |  |  |
| queue_font1_title_size | int(11) | YES |  | NULL |  |  |
| queue_font2_title_size | int(11) | YES |  | NULL |  |  |
| queue_font1_color | int(11) | YES |  | NULL |  |  |
| queue_font2_color | int(11) | YES |  | NULL |  |  |
| queue_border_color | int(11) | YES |  | NULL |  |  |
| queue_tint_color | int(11) | YES |  | NULL |  |  |
| queue_blink_color | int(11) | YES |  | NULL |  |  |
| last_active_datetime | datetime | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| queue_room_panel_width | int(11) | YES |  | NULL |  |  |
| opd_qs_location_type_id | int(11) | YES |  | NULL |  |  |
| speak_room_text | varchar(50) | YES |  | NULL |  |  |
| speak_room_number | char(1) | YES |  | NULL |  |  |
| auto_gen_slot | char(1) | YES |  | NULL |  |  |
| auto_gen_slot_prefix1 | char(1) | YES |  | NULL |  |  |
| auto_gen_slot_prefix2 | char(1) | YES |  | NULL |  |  |
| speak_computer | varchar(150) | YES |  | NULL |  |  |
| queue_no_pos_type_id | int(11) | YES |  | NULL |  |  |
| queue_title_text | varchar(100) | YES |  | NULL |  |  |
| room_title_text | varchar(100) | YES |  | NULL |  |  |
| next_wait_queue_text | varchar(200) | YES |  | NULL |  |  |
| show_next_wait_queue | char(1) | YES |  | NULL |  |  |
| next_wait_queue_count | int(11) | YES |  | NULL |  |  |
| queue_wait_font_size | int(11) | YES |  | NULL |  |  |
| android_font1_size | int(11) | YES |  | NULL |  |  |
| android_font2_size | int(11) | YES |  | NULL |  |  |
| android_font_height | int(11) | YES |  | NULL |  |  |
| android_room_width | int(11) | YES |  | NULL |  |  |
| android_title_font_size | int(11) | YES |  | NULL |  |  |
| queue_font1_height | int(11) | YES |  | NULL |  |  |
| max_parallel_queue | int(11) | YES |  | NULL |  |  |
| current_queue2 | varchar(10) | YES |  | NULL |  |  |
| current_queue3 | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_qs_location_id | opd_qs_location_id | no | 1 |
| ix_qs_location_id_active | opd_qs_location_id | no | 1 |
| ix_qs_location_id_active | room_active | no | 2 |
| ix_room_name | opd_qs_room_name | no | 1 |
| PRIMARY | opd_qs_room_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
