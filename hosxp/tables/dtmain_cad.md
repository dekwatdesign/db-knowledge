# `dtmain_cad`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dtmain_cad_id | int(11) | NO | PRI | 0 |  |  |
| dtmain_id | int(11) | YES | MUL | NULL |  |  |
| dtmain_cad_blob | longblob | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| dtmain_cad_no | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dtmain_id | dtmain_id | no | 1 |
| PRIMARY | dtmain_cad_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
