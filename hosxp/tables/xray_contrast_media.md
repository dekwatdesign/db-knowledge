# `xray_contrast_media`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| xray_contrast_media_id | int(11) | NO | PRI | 0 |  |  |
| xray_contrast_media_name | varchar(150) | YES | UNI | NULL |  |  |
| icode | char(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_xray_contrast_media_name | xray_contrast_media_name | yes | 1 |
| PRIMARY | xray_contrast_media_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "xray_contrast_media_id": 1,
    "xray_contrast_media_name": "Telebrix",
    "icode": null,
    "price": null,
    "hos_guid": "{AD64801E-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_contrast_media_id": 2,
    "xray_contrast_media_name": "Xenetic",
    "icode": null,
    "price": null,
    "hos_guid": "{AD64826C-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_contrast_media_id": 3,
    "xray_contrast_media_name": "Ultravist",
    "icode": null,
    "price": null,
    "hos_guid": "{AD648370-F61E-11DE-BFF4-00215E472B30}"
  },
  {
    "xray_contrast_media_id": 4,
    "xray_contrast_media_name": "Iopamiro",
    "icode": null,
    "price": null,
    "hos_guid": "{AD648460-F61E-11DE-BFF4-00215E472B30}"
  }
]
```
