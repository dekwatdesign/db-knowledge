# `village_priest_rank`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_priest_rank_id | int(11) | NO | PRI | 0 |  |  |
| village_priest_rank_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_village_priest_rank_name | village_priest_rank_name | yes | 1 |
| PRIMARY | village_priest_rank_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "village_priest_rank_id": 1,
    "village_priest_rank_name": "สมเด็จพระสังฆราช"
  },
  {
    "village_priest_rank_id": 2,
    "village_priest_rank_name": "สมเด็จพระราชาคณะ"
  },
  {
    "village_priest_rank_id": 3,
    "village_priest_rank_name": "พระราชาคณะเจ้าคณะรอง"
  },
  {
    "village_priest_rank_id": 4,
    "village_priest_rank_name": "พระราชาคณะชั้นธรรม"
  },
  {
    "village_priest_rank_id": 5,
    "village_priest_rank_name": "พระราชาคณะชั้นเทพ"
  },
  {
    "village_priest_rank_id": 6,
    "village_priest_rank_name": "พระราชาคณะชั้นราช"
  },
  {
    "village_priest_rank_id": 7,
    "village_priest_rank_name": "พระราชาคณะชั้นสามัญ"
  },
  {
    "village_priest_rank_id": 8,
    "village_priest_rank_name": "พระครูสัญญาบัตรชั้นตรี-โท-เอก-พิเศษ"
  }
]
```
