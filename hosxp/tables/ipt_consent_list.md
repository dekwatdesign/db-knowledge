# `ipt_consent_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_consent_list_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| ipt_consent_type_id | int(11) | YES |  | NULL |  |  |
| consent_datetime | datetime | YES |  | NULL |  |  |
| consent_staff | varchar(50) | YES |  | NULL |  |  |
| consent_note_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | ipt_consent_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
