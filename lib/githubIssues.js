// const { Octokit } = require("@octokit/core");
// // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
// const token = '7babfff0def98c6d0a48c77666d7118282071962';
// const octokit = new Octokit({ auth: token });
// const owner = 'rainy-25Ghz';
// const repo = 'blog-comments';
// // export async function addComment(comment) {
// //     const response = await octokit.request(`POST /repos/${owner}/${repo}/issues`, {
// //         owner: 'octocat',
// //         repo: 'hello-world',
// //         title: 'title',
// //         body: comment ? comment : "#asas\n - 1 sdadjaskd\n - 2 sdaasjdhasjkd\n - 3 sadkljsalkdjaslkdj\n",
// //     });
// //     return response;
// // } 
// //每篇博客相当于一个issue
// //每个博文的评论相当于issue的评论
// //添加一个issue（博文）
// export async function addBlogPost(title) {
//     const response = await octokit.request(`POST /repos/${owner}/${repo}/issues`, {
//         owner: owner,
//         repo: repo,
//         title: title,
//         body: "# post",
//     });
//     console.log(response.status, response.data.number, response.data.title)
//     return response;
// }
// //获取所有issues（博文）
// export async function getBlogPosts() {
//     const response = await octokit.request(`GET /repos/${owner}/${repo}/issues`, {
//         owner: owner,
//         repo: repo,
//     })
//     return response;
// }
// //获取特定issue信息
// export async function getBlogPostByIssueNumber(number) {
//     const response = await octokit.request(`GET /repos/${owner}/${repo}/issues/${number}`, {
//         owner: owner,
//         repo: repo,
//         issue_number: number
//     })
//     return response;
// }
// //给指定issue评论
// export async function addComment(issue_number) {
//     const response = await octokit.request(`POST /repos/${owner}/${repo}/issues/${issue_number}/comments`, {
//         owner: owner,
//         repo: repo,
//         issue_number: issue_number,
//         body: 'body'
//     })
// }
// //获取指定issue的评论
// export async function getComments(issue_number) {
//     const response = await octokit.request(`GET /repos/${owner}/${repo}/issues/${issue_number}/comments`, {
//         owner: owner,
//         repo: repo,
//         issue_number: issue_number
//     });
//     return response;
// }
// // export async function addBlogPostComment(post) {
// //     const response = await octokit.request(`POST /repos/${owner}/${repo}/issues`, {
// //         owner: owner,
// //         repo: repo,
// //         title: 'title',
// //         body: comment ? comment : "# asas\n - 1 sdadjaskd\n - 2 sdaasjdhasjkd\n - 3 sadkljsalkdjaslkdj\n",
// //     });
// //     return response;
// // }