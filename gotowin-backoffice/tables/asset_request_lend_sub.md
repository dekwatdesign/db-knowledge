# `asset_request_lend_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ASSET_REQUEST_LEND_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| ASSET_REQUEST_LEND_ID | int | YES |  | NULL |  |  |
| ASSET_REQUEST_LEND_SUB_NUMBER | varchar(255) | YES |  | NULL |  |  |
| ASSET_REQUEST_LEND_SUB_DETAIL | varchar(255) | YES |  | NULL |  |  |
| ASSET_REQUEST_LEND_SUB_UNIT | varchar(11) | YES |  | NULL |  |  |
| ASSET_REQUEST_LEND_SUB_PRICE | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| ASSET_REQUEST_LEND_SUB_ARTICLE_ID | int | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ASSET_REQUEST_LEND_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ASSET_REQUEST_LEND_SUB_ID": 10,
    "ASSET_REQUEST_LEND_ID": 4,
    "ASSET_REQUEST_LEND_SUB_NUMBER": "A63-7440-001-0008/0006",
    "ASSET_REQUEST_LEND_SUB_DETAIL": "คอมพิวเตอร์แท็ปเล็ต",
    "ASSET_REQUEST_LEND_SUB_UNIT": "12",
    "ASSET_REQUEST_LEND_SUB_PRICE": 18190,
    "updated_at": "2022-11-02 12:59:33",
    "created_at": "2022-11-02 12:59:33",
    "ASSET_REQUEST_LEND_SUB_ARTICLE_ID": 2227
  },
  {
    "ASSET_REQUEST_LEND_SUB_ID": 12,
    "ASSET_REQUEST_LEND_ID": 3,
    "ASSET_REQUEST_LEND_SUB_NUMBER": "A63-7440-001-0008/0015",
    "ASSET_REQUEST_LEND_SUB_DETAIL": "คอมพิวเตอร์แท็ปเล็ต",
    "ASSET_REQUEST_LEND_SUB_UNIT": "12",
    "ASSET_REQUEST_LEND_SUB_PRICE": 18190,
    "updated_at": "2022-11-03 16:04:22",
    "created_at": "2022-11-03 16:04:22",
    "ASSET_REQUEST_LEND_SUB_ARTICLE_ID": 2236
  },
  {
    "ASSET_REQUEST_LEND_SUB_ID": 13,
    "ASSET_REQUEST_LEND_ID": 3,
    "ASSET_REQUEST_LEND_SUB_NUMBER": "A63-7440-001-0008/0023",
    "ASSET_REQUEST_LEND_SUB_DETAIL": "คอมพิวเตอร์แท็ปเล็ต",
    "ASSET_REQUEST_LEND_SUB_UNIT": "12",
    "ASSET_REQUEST_LEND_SUB_PRICE": 18190,
    "updated_at": "2022-11-03 16:04:22",
    "created_at": "2022-11-03 16:04:22",
    "ASSET_REQUEST_LEND_SUB_ARTICLE_ID": 2244
  },
  {
    "ASSET_REQUEST_LEND_SUB_ID": 14,
    "ASSET_REQUEST_LEND_ID": 3,
    "ASSET_REQUEST_LEND_SUB_NUMBER": "A63-7440-001-0008/0024",
    "ASSET_REQUEST_LEND_SUB_DETAIL": "คอมพิวเตอร์แท็ปเล็ต",
    "ASSET_REQUEST_LEND_SUB_UNIT": "12",
    "ASSET_REQUEST_LEND_SUB_PRICE": 18190,
    "updated_at": "2022-11-03 16:04:22",
    "created_at": "2022-11-03 16:04:22",
    "ASSET_REQUEST_LEND_SUB_ARTICLE_ID": 2245
  },
  {
    "ASSET_REQUEST_LEND_SUB_ID": 16,
    "ASSET_REQUEST_LEND_ID": 5,
    "ASSET_REQUEST_LEND_SUB_NUMBER": "A63-7440-001-0008/0016",
    "ASSET_REQUEST_LEND_SUB_DETAIL": "คอมพิวเตอร์แท็ปเล็ต",
    "ASSET_REQUEST_LEND_SUB_UNIT": "12",
    "ASSET_REQUEST_LEND_SUB_PRICE": 18190,
    "updated_at": "2022-11-08 14:27:44",
    "created_at": "2022-11-08 14:27:44",
    "ASSET_REQUEST_LEND_SUB_ARTICLE_ID": 2237
  },
  {
    "ASSET_REQUEST_LEND_SUB_ID": 19,
    "ASSET_REQUEST_LEND_ID": 6,
    "ASSET_REQUEST_LEND_SUB_NUMBER": "A63-7440-001-0008/0020",
    "ASSET_REQUEST_LEND_SUB_DETAIL": "คอมพิวเตอร์แท็ปเล็ต",
    "ASSET_REQUEST_LEND_SUB_UNIT": "12",
    "ASSET_REQUEST_LEND_SUB_PRICE": 18190,
    "updated_at": "2022-12-14 09:26:08",
    "created_at": "2022-12-14 09:26:08",
    "ASSET_REQUEST_LEND_SUB_ARTICLE_ID": 2241
  },
  {
    "ASSET_REQUEST_LEND_SUB_ID": 21,
    "ASSET_REQUEST_LEND_ID": 7,
    "ASSET_REQUEST_LEND_SUB_NUMBER": "A63-7440-001-0008/0006",
    "ASSET_REQUEST_LEND_SUB_DETAIL": "คอมพิวเตอร์แท็ปเล็ต",
    "ASSET_REQUEST_LEND_SUB_UNIT": "12",
    "ASSET_REQUEST_LEND_SUB_PRICE": 18190,
    "updated_at": "2023-01-04 10:06:26",
    "created_at": "2023-01-04 10:06:26",
    "ASSET_REQUEST_LEND_SUB_ARTICLE_ID": 2227
  },
  {
    "ASSET_REQUEST_LEND_SUB_ID": 22,
    "ASSET_REQUEST_LEND_ID": 8,
    "ASSET_REQUEST_LEND_SUB_NUMBER": "A63-7440-001-0008/0006",
    "ASSET_REQUEST_LEND_SUB_DETAIL": "คอมพิวเตอร์แท็ปเล็ต",
    "ASSET_REQUEST_LEND_SUB_UNIT": "12",
    "ASSET_REQUEST_LEND_SUB_PRICE": 18190,
    "updated_at": "2023-02-01 11:37:44",
    "created_at": "2023-02-01 11:37:44",
    "ASSET_REQUEST_LEND_SUB_ARTICLE_ID": 2227
  }
]
```
