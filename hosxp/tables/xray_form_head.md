# `xray_form_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_form_head_id | int(11) | NO | PRI | 0 |  |  |
| xray_form_name | varchar(250) | YES | UNI | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| design_dfm | longtext | YES |  | NULL |  |  |
| design_pas | longtext | YES |  | NULL |  |  |
| enable_script | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_unique | xray_form_name | yes | 1 |
| PRIMARY | xray_form_head_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
