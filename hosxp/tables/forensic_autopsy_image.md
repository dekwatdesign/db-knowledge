# `forensic_autopsy_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_autopsy_image_id | int(11) | NO | PRI | 0 |  |  |
| image_blob | longblob | YES |  | NULL |  |  |
| image_note | varchar(250) | YES |  | NULL |  |  |
| forensic_autopsy_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refforensic_autopsy17 | forensic_autopsy_id | no | 1 |
| PRIMARY | forensic_autopsy_image_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
