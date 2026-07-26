# `dtmain_cad_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dtmain_cad_template_id | int(11) | NO | PRI | 0 |  |  |
| dtmain_cad_template_name | varchar(200) | YES | UNI | NULL |  |  |
| dtmain_cad_template_blob | longblob | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dtmain_cad_template_name | dtmain_cad_template_name | yes | 1 |
| PRIMARY | dtmain_cad_template_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
