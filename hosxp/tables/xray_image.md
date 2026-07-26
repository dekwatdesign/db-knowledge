# `xray_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xn | int(11) | NO | PRI | 0 |  |  |
| image1 | longblob | YES |  | NULL |  |  |
| image1_note | text | YES |  | NULL |  |  |
| image2 | longblob | YES |  | NULL |  |  |
| image2_note | text | YES |  | NULL |  |  |
| image3 | longblob | YES |  | NULL |  |  |
| image3_note | text | YES |  | NULL |  |  |
| image4 | longblob | YES |  | NULL |  |  |
| image4_note | text | YES |  | NULL |  |  |
| image5 | longblob | YES |  | NULL |  |  |
| image5_note | text | YES |  | NULL |  |  |
| image1_filename | varchar(150) | YES |  | NULL |  |  |
| image2_filename | varchar(150) | YES |  | NULL |  |  |
| image3_filename | varchar(150) | YES |  | NULL |  |  |
| image4_filename | varchar(150) | YES |  | NULL |  |  |
| image5_filename | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | xn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
