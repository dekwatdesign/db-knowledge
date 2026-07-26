# `payment_kiosk`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| payment_kiosk_id | int(11) | NO | PRI | 0 |  |  |
| payment_kiosk_code | varchar(50) | YES | UNI | NULL |  |  |
| payment_kiosk_name | varchar(200) | YES |  | NULL |  |  |
| total_accept_coin_1 | int(11) | YES |  | NULL |  |  |
| total_accept_coin_2 | int(11) | YES |  | NULL |  |  |
| total_accept_coin_5 | int(11) | YES |  | NULL |  |  |
| total_accept_coin_10 | int(11) | YES |  | NULL |  |  |
| total_accept_note_20 | int(11) | YES |  | NULL |  |  |
| total_accept_note_50 | int(11) | YES |  | NULL |  |  |
| total_accept_note_100 | int(11) | YES |  | NULL |  |  |
| total_accept_note_500 | int(11) | YES |  | NULL |  |  |
| total_accept_note_1000 | int(11) | YES |  | NULL |  |  |
| total_change_coin_1 | int(11) | YES |  | NULL |  |  |
| total_change_coin_2 | int(11) | YES |  | NULL |  |  |
| total_change_coin_5 | int(11) | YES |  | NULL |  |  |
| total_change_coin_10 | int(11) | YES |  | NULL |  |  |
| total_change_note_20 | int(11) | YES |  | NULL |  |  |
| total_change_note_50 | int(11) | YES |  | NULL |  |  |
| total_change_note_100 | int(11) | YES |  | NULL |  |  |
| total_change_note_500 | int(11) | YES |  | NULL |  |  |
| total_change_note_1000 | int(11) | YES |  | NULL |  |  |
| total_accept_amount | double(22,2) | YES |  | NULL |  |  |
| total_change_amount | double(22,2) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_payment_kiosk_code | payment_kiosk_code | yes | 1 |
| PRIMARY | payment_kiosk_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
