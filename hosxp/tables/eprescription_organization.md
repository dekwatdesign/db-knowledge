# `eprescription_organization`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| eprescription_organization_id | int(11) | NO | PRI | 0 |  |  |
| eprescription_organization_code | varchar(5) | YES | UNI | NULL |  |  |
| eprescription_organization_name | varchar(200) | YES | UNI | NULL |  |  |
| organization_note_text | text | YES |  | NULL |  |  |
| eprescription_type_id | int(11) | YES |  | NULL |  |  |
| phone_number | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_eprescription_organization_name | eprescription_organization_name | yes | 1 |
| ix_unique | eprescription_organization_code | yes | 1 |
| PRIMARY | eprescription_organization_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
