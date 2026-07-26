# `lab_order_image`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_order_number | int(11) | NO | PRI | 0 |  |  |
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
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | lab_order_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "lab_order_number": 14351,
    "image1": null,
    "image1_note": null,
    "image2": null,
    "image2_note": null,
    "image3": null,
    "image3_note": null,
    "image4": null,
    "image4_note": null,
    "image5": null,
    "image5_note": null,
    "hos_guid": null
  },
  {
    "lab_order_number": 16232,
    "image1": "[MASKED_AVATAR]",
    "image1_note": null,
    "image2": null,
    "image2_note": null,
    "image3": null,
    "image3_note": null,
    "image4": null,
    "image4_note": null,
    "image5": null,
    "image5_note": null,
    "hos_guid": null
  },
  {
    "lab_order_number": 16238,
    "image1": "[MASKED_AVATAR]",
    "image1_note": null,
    "image2": "[MASKED_AVATAR]",
    "image2_note": null,
    "image3": null,
    "image3_note": null,
    "image4": null,
    "image4_note": null,
    "image5": null,
    "image5_note": null,
    "hos_guid": null
  },
  {
    "lab_order_number": 16240,
    "image1": "[MASKED_AVATAR]",
    "image1_note": null,
    "image2": null,
    "image2_note": null,
    "image3": null,
    "image3_note": null,
    "image4": null,
    "image4_note": null,
    "image5": null,
    "image5_note": null,
    "hos_guid": null
  },
  {
    "lab_order_number": 16255,
    "image1": "[MASKED_AVATAR]",
    "image1_note": null,
    "image2": null,
    "image2_note": null,
    "image3": null,
    "image3_note": null,
    "image4": null,
    "image4_note": null,
    "image5": null,
    "image5_note": null,
    "hos_guid": null
  },
  {
    "lab_order_number": 16239,
    "image1": "[MASKED_AVATAR]",
    "image1_note": null,
    "image2": null,
    "image2_note": null,
    "image3": null,
    "image3_note": null,
    "image4": null,
    "image4_note": null,
    "image5": null,
    "image5_note": null,
    "hos_guid": null
  },
  {
    "lab_order_number": 16235,
    "image1": "[MASKED_AVATAR]",
    "image1_note": null,
    "image2": null,
    "image2_note": null,
    "image3": null,
    "image3_note": null,
    "image4": null,
    "image4_note": null,
    "image5": null,
    "image5_note": null,
    "hos_guid": null
  },
  {
    "lab_order_number": 16301,
    "image1": "[MASKED_AVATAR]",
    "image1_note": null,
    "image2": null,
    "image2_note": null,
    "image3": null,
    "image3_note": null,
    "image4": null,
    "image4_note": null,
    "image5": null,
    "image5_note": null,
    "hos_guid": null
  }
]
```
