# `xray_form_event`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_form_event_id | int(11) | NO | PRI | 0 |  |  |
| xray_form_name | varchar(250) | YES | MUL | NULL |  |  |
| event_name | varchar(200) | YES | MUL | NULL |  |  |
| event_text | longtext | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fe | xray_form_name | yes | 1 |
| ix_fe | event_name | yes | 2 |
| ix_fe_index | event_name | yes | 1 |
| ix_fe_index | xray_form_name | yes | 2 |
| ix_form_name | xray_form_name | no | 1 |
| PRIMARY | xray_form_event_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
