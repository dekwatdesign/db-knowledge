# `rx_queue_dispense_setting`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_queue_dispense_setting_id | int(11) | NO | PRI | 0 |  |  |
| machine_name | varchar(255) | YES | MUL | NULL |  |  |
| rx_queue_dep_type_group_id | varchar(100) | YES |  | NULL |  |  |
| font_size | int(11) | YES |  | NULL |  |  |
| font_color | varchar(8) | YES |  | NULL |  |  |
| background_color | varchar(8) | YES |  | NULL |  |  |
| columns_number | int(11) | YES |  | NULL |  |  |
| row_number | int(11) | YES |  | NULL |  |  |
| blink_number | int(11) | YES |  | NULL |  |  |
| font_slot_color | varchar(8) | YES |  | NULL |  |  |
| font_header_size | int(11) | YES |  | NULL |  |  |
| font_header_color | varchar(8) | YES |  | NULL |  |  |
| bg_header_color | varchar(8) | YES |  | NULL |  |  |
| text_header | varchar(255) | YES |  | NULL |  |  |
| use_footer | char(1) | YES |  | NULL |  |  |
| font_footer_size | int(11) | YES |  | NULL |  |  |
| font_footer_color | varchar(8) | YES |  | NULL |  |  |
| bg_footer_color | varchar(8) | YES |  | NULL |  |  |
| text_footer | varchar(255) | YES |  | NULL |  |  |
| font_q_style | varchar(255) | YES |  | NULL |  |  |
| font_header_style | varchar(255) | YES |  | NULL |  |  |
| font_footer_style | varchar(255) | YES |  | NULL |  |  |
| refresh_sec | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_rx_mac_name | machine_name | no | 1 |
| PRIMARY | rx_queue_dispense_setting_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
