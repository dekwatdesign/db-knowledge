# `risk_screen_choice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_screen_choice_id | int(11) | NO | PRI | 0 |  |  |
| risk_screen_choice_seq | int(11) | NO | PRI | 0 |  |  |
| risk_screen_choice_name | varchar(100) | YES |  | NULL |  |  |
| risk_screen_choice_code | varchar(5) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | risk_screen_choice_id | yes | 1 |
| PRIMARY | risk_screen_choice_seq | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
