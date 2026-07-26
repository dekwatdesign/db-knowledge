# `opdscreen_pe_img`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_pe_img_id | int(11) | NO | PRI | 0 |  |  |
| opdscreen_pe_id | int(11) | YES | MUL | NULL |  |  |
| image_text | text | YES |  | NULL |  |  |
| image_data | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | opdscreen_pe_id | no | 1 |
| PRIMARY | opdscreen_pe_img_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
