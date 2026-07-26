# `pttype_grouper`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_grouper_id | int(11) | NO | PRI | 0 |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| end_date | date | YES |  | NULL |  |  |
| grouper_major_version | int(11) | YES |  | NULL |  |  |
| grouper_minor_version | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype | pttype | no | 1 |
| PRIMARY | pttype_grouper_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pttype_grouper_id": 2,
    "pttype": "02",
    "begin_date": "2006-02-01",
    "end_date": "2017-12-31",
    "grouper_major_version": 5103,
    "grouper_minor_version": null
  },
  {
    "pttype_grouper_id": 3,
    "pttype": "02",
    "begin_date": "2018-01-01",
    "end_date": "2019-01-31",
    "grouper_major_version": 6203,
    "grouper_minor_version": null
  },
  {
    "pttype_grouper_id": 4,
    "pttype": "02",
    "begin_date": "2020-02-01",
    "end_date": "2022-12-31",
    "grouper_major_version": 6205,
    "grouper_minor_version": null
  },
  {
    "pttype_grouper_id": 5,
    "pttype": "26",
    "begin_date": "2006-02-01",
    "end_date": "2017-12-31",
    "grouper_major_version": 5103,
    "grouper_minor_version": null
  },
  {
    "pttype_grouper_id": 6,
    "pttype": "26",
    "begin_date": "2018-01-01",
    "end_date": "2019-01-31",
    "grouper_major_version": 6203,
    "grouper_minor_version": null
  },
  {
    "pttype_grouper_id": 7,
    "pttype": "26",
    "begin_date": "2019-02-01",
    "end_date": "2022-12-31",
    "grouper_major_version": 6205,
    "grouper_minor_version": null
  },
  {
    "pttype_grouper_id": 8,
    "pttype": "10",
    "begin_date": "2006-02-01",
    "end_date": "2024-04-30",
    "grouper_major_version": 5103,
    "grouper_minor_version": null
  },
  {
    "pttype_grouper_id": 9,
    "pttype": "01",
    "begin_date": "2006-02-01",
    "end_date": "2017-12-31",
    "grouper_major_version": 5103,
    "grouper_minor_version": null
  }
]
```
