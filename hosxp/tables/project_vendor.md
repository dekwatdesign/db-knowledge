# `project_vendor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_vendor_id | int(11) | NO | PRI | 0 |  |  |
| project_vendor_name | varchar(200) | YES | UNI | NULL |  |  |
| project_vendor_addr1 | varchar(250) | YES |  | NULL |  |  |
| project_vendor_addr2 | varchar(250) | YES |  | NULL |  |  |
| project_vendor_phone | varchar(200) | YES |  | NULL |  |  |
| project_vendor_fax | varchar(100) | YES |  | NULL |  |  |
| project_vendor_regno | varchar(13) | YES | MUL | NULL |  |  |
| project_vendor_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_project_vendor_name | project_vendor_name | yes | 1 |
| ix_project_vendor_regno | project_vendor_regno | no | 1 |
| PRIMARY | project_vendor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
