# `bb_receivedetail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| receivedetailid | bigint(20) | NO | PRI | 0 |  |  |
| receiveid | int(11) | YES |  | NULL |  |  |
| unitid | int(11) | YES |  | NULL |  |  |
| bloodgroupid | int(11) | YES |  | NULL |  |  |
| subgroupid | int(11) | YES |  | NULL |  |  |
| note | varchar(50) | YES |  | NULL |  |  |
| quantity | int(11) | YES |  | NULL |  |  |
| estimatecost | double(15,3) | YES |  | NULL |  |  |
| infectious | char(1) | YES |  | NULL |  |  |
| grouping | char(1) | YES |  | NULL |  |  |
| screening | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | receivedetailid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
