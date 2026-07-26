# `lab_form_web`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_form_web_id | int(11) | NO | PRI | 0 |  |  |
| form_name | varchar(200) | YES | UNI | NULL |  |  |
| form_data | longtext | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| confirm_charge_money | char(1) | YES |  | NULL |  |  |
| finance_lab_confirm | char(1) | YES |  | NULL |  |  |
| allow_manual_entry | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_form_name | form_name | yes | 1 |
| PRIMARY | lab_form_web_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
