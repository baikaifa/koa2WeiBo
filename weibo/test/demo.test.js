/**
 * @description test demo
 * @author 白凯发
 */

function sum(a, b) {
    a + b
}


test('10+20应该等于30', () => {
    const res = sum(10, 20)
    expect(res).toBe(30)
})