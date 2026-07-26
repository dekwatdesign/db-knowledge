# `post_care_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| post_care_screen_id | int(11) | NO | PRI | 0 |  |  |
| post_care_screen_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_post_care_screen_name | post_care_screen_name | yes | 1 |
| PRIMARY | post_care_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "post_care_screen_id": 1,
    "post_care_screen_name": "สะดือ",
    "hos_guid": null
  },
  {
    "post_care_screen_id": 2,
    "post_care_screen_name": "ผิวหนัง",
    "hos_guid": null
  },
  {
    "post_care_screen_id": 3,
    "post_care_screen_name": "ปัสสาวะ",
    "hos_guid": null
  },
  {
    "post_care_screen_id": 4,
    "post_care_screen_name": "อุจจาระ",
    "hos_guid": null
  },
  {
    "post_care_screen_id": 5,
    "post_care_screen_name": "สุขภาพ",
    "hos_guid": null
  }
]
```
