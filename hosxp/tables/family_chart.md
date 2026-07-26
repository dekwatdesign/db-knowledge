# `family_chart`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| parent | int(11) | YES |  | NULL |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| cdate | date | YES |  | NULL |  |  |
| cby | varchar(200) | YES |  | NULL |  |  |
| width | int(11) | YES |  | NULL |  |  |
| height | int(11) | YES |  | NULL |  |  |
| shape_type | varchar(25) | YES |  | NULL |  |  |
| color | int(11) | YES |  | NULL |  |  |
| image_index | int(11) | YES |  | NULL |  |  |
| imagealign | varchar(25) | YES |  | NULL |  |  |
| shape_order | int(11) | YES |  | NULL |  |  |
| align | varchar(25) | YES |  | NULL |  |  |
| hid | int(11) | YES | MUL | NULL |  |  |
| old_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hid | hid | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| name | name | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
